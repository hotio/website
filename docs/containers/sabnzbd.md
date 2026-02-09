---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag24809" onclick="CopyToClipboard('tag24809');return false;" class="tag-decoration">nightly</div><div id="tag28806" onclick="CopyToClipboard('tag28806');return false;" class="tag-decoration">nightly-6d5cdac</div><div id="tag12820" onclick="CopyToClipboard('tag12820');return false;" class="tag-decoration">nightly-920e23e11e51b0ff19de511cbba398b7d89d3b15</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/6d5cdac52f033e764f0445c796b85816e93528c8" target="_blank">Version update: e898f92f49efc13c70479fe45cc402b7e46934eb => 920e23e11e51b0ff19de511cbba398b7d89d3b15</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21811142072" target="_blank">2026-02-09 03:17:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12381" onclick="CopyToClipboard('tag12381');return false;" class="tag-decoration">release</div><div id="tag18242" onclick="CopyToClipboard('tag18242');return false;" class="tag-decoration">release-46290ae</div><div id="tag20639" onclick="CopyToClipboard('tag20639');return false;" class="tag-decoration">release-4.5.5</div><div id="tag18395" onclick="CopyToClipboard('tag18395');return false;" class="tag-decoration">release-v4</div><div id="tag19058" onclick="CopyToClipboard('tag19058');return false;" class="tag-decoration">release-v4.5</div><div id="tag20300" onclick="CopyToClipboard('tag20300');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/46290ae916da9d974f41c8d444cc12ecb070f01e" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21428866181" target="_blank">2026-01-28 07:15:20</a></td></tr>
<tr><td><div id="tag9691" onclick="CopyToClipboard('tag9691');return false;" class="tag-decoration">testing</div><div id="tag13912" onclick="CopyToClipboard('tag13912');return false;" class="tag-decoration">testing-67cc536</div><div id="tag9865" onclick="CopyToClipboard('tag9865');return false;" class="tag-decoration">testing-5.0.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/67cc5366ab641eb291226a54b9efc355d1eb75b1" target="_blank">Version update: 4.6.0Beta2 => 5.0.0Beta1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21595260021" target="_blank">2026-02-02 15:02:56</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
