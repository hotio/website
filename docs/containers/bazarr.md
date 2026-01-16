---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag12626" onclick="CopyToClipboard('tag12626');return false;" class="tag-decoration">nightly</div><div id="tag697" onclick="CopyToClipboard('tag697');return false;" class="tag-decoration">nightly-5436f7a</div><div id="tag15538" onclick="CopyToClipboard('tag15538');return false;" class="tag-decoration">nightly-1.5.5-beta.5</div><div id="tag31576" onclick="CopyToClipboard('tag31576');return false;" class="tag-decoration">nightly-v1</div><div id="tag26621" onclick="CopyToClipboard('tag26621');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag20400" onclick="CopyToClipboard('tag20400');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/5436f7aeabb22117a416f18bcfb72895d05f0e14" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21063271726" target="_blank">2026-01-16 10:16:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4871" onclick="CopyToClipboard('tag4871');return false;" class="tag-decoration">release</div><div id="tag1754" onclick="CopyToClipboard('tag1754');return false;" class="tag-decoration">release-b0c921a</div><div id="tag14271" onclick="CopyToClipboard('tag14271');return false;" class="tag-decoration">release-1.5.4</div><div id="tag15505" onclick="CopyToClipboard('tag15505');return false;" class="tag-decoration">release-v1</div><div id="tag30403" onclick="CopyToClipboard('tag30403');return false;" class="tag-decoration">release-v1.5</div><div id="tag1504" onclick="CopyToClipboard('tag1504');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/b0c921a5dd0bfc9b46ece6d4c640df5ad14455aa" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21064886187" target="_blank">2026-01-16 11:18:03</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
