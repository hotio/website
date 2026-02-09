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
<tr><td><div id="tag9404" onclick="CopyToClipboard('tag9404');return false;" class="tag-decoration">nightly</div><div id="tag18392" onclick="CopyToClipboard('tag18392');return false;" class="tag-decoration">nightly-c573d37</div><div id="tag4155" onclick="CopyToClipboard('tag4155');return false;" class="tag-decoration">nightly-507edc3ddf81669380843fd25003780539644d98</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/c573d37163da78e2b8d2ea2bad5d550d7d09e9ac" target="_blank">Version update: 920e23e11e51b0ff19de511cbba398b7d89d3b15 => 507edc3ddf81669380843fd25003780539644d98</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21817881711" target="_blank">2026-02-09 08:34:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10908" onclick="CopyToClipboard('tag10908');return false;" class="tag-decoration">release</div><div id="tag28328" onclick="CopyToClipboard('tag28328');return false;" class="tag-decoration">release-46290ae</div><div id="tag7454" onclick="CopyToClipboard('tag7454');return false;" class="tag-decoration">release-4.5.5</div><div id="tag13527" onclick="CopyToClipboard('tag13527');return false;" class="tag-decoration">release-v4</div><div id="tag9342" onclick="CopyToClipboard('tag9342');return false;" class="tag-decoration">release-v4.5</div><div id="tag27436" onclick="CopyToClipboard('tag27436');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/46290ae916da9d974f41c8d444cc12ecb070f01e" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21428866181" target="_blank">2026-01-28 07:15:20</a></td></tr>
<tr><td><div id="tag8926" onclick="CopyToClipboard('tag8926');return false;" class="tag-decoration">testing</div><div id="tag11743" onclick="CopyToClipboard('tag11743');return false;" class="tag-decoration">testing-67cc536</div><div id="tag10439" onclick="CopyToClipboard('tag10439');return false;" class="tag-decoration">testing-5.0.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/67cc5366ab641eb291226a54b9efc355d1eb75b1" target="_blank">Version update: 4.6.0Beta2 => 5.0.0Beta1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21595260021" target="_blank">2026-02-02 15:02:56</a></td></tr>
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
