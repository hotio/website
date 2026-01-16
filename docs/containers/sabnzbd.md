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
<tr><td><div id="tag29061" onclick="CopyToClipboard('tag29061');return false;" class="tag-decoration">nightly</div><div id="tag11732" onclick="CopyToClipboard('tag11732');return false;" class="tag-decoration">nightly-a05738c</div><div id="tag29252" onclick="CopyToClipboard('tag29252');return false;" class="tag-decoration">nightly-cf14e24036c8d5cf1085fd24e3d899d4eb84e7b8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/a05738cc2b453b79b90894f3368f7133ee621b0d" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21063298908" target="_blank">2026-01-16 10:17:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag643" onclick="CopyToClipboard('tag643');return false;" class="tag-decoration">release</div><div id="tag18612" onclick="CopyToClipboard('tag18612');return false;" class="tag-decoration">release-f90631c</div><div id="tag8539" onclick="CopyToClipboard('tag8539');return false;" class="tag-decoration">release-4.5.5</div><div id="tag17674" onclick="CopyToClipboard('tag17674');return false;" class="tag-decoration">release-v4</div><div id="tag30888" onclick="CopyToClipboard('tag30888');return false;" class="tag-decoration">release-v4.5</div><div id="tag8333" onclick="CopyToClipboard('tag8333');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f90631c50309b7373d7fea1d8dda92fc6dc5873a" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21063299479" target="_blank">2026-01-16 10:17:54</a></td></tr>
<tr><td><div id="tag14697" onclick="CopyToClipboard('tag14697');return false;" class="tag-decoration">testing</div><div id="tag30990" onclick="CopyToClipboard('tag30990');return false;" class="tag-decoration">testing-3a043a6</div><div id="tag3453" onclick="CopyToClipboard('tag3453');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3a043a6e46e701938f1c287fda3060d590da1f20" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21063300019" target="_blank">2026-01-16 10:17:55</a></td></tr>
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
