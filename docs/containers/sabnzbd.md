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
<tr><td><div id="tag3330" onclick="CopyToClipboard('tag3330');return false;" class="tag-decoration">nightly</div><div id="tag11104" onclick="CopyToClipboard('tag11104');return false;" class="tag-decoration">nightly-571c473</div><div id="tag31737" onclick="CopyToClipboard('tag31737');return false;" class="tag-decoration">nightly-2184964d7877e0fddee0fd0421e6c21fd38ceae7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/571c473d4d134a8f27b1e4a3b0557b9034e0c3f8" target="_blank">Version update: b942e06297ab039a6ff848d5e479ec374ab907f2 => 2184964d7877e0fddee0fd0421e6c21fd38ceae7</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25817940707" target="_blank">2026-05-13 18:17:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23871" onclick="CopyToClipboard('tag23871');return false;" class="tag-decoration">release</div><div id="tag9999" onclick="CopyToClipboard('tag9999');return false;" class="tag-decoration">release-9c7f3d8</div><div id="tag5398" onclick="CopyToClipboard('tag5398');return false;" class="tag-decoration">release-5.0.1</div><div id="tag6190" onclick="CopyToClipboard('tag6190');return false;" class="tag-decoration">release-v5</div><div id="tag29028" onclick="CopyToClipboard('tag29028');return false;" class="tag-decoration">release-v5.0</div><div id="tag8709" onclick="CopyToClipboard('tag8709');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9c7f3d85b39622d4ef56cdff3a48d7e455fd3415" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25714979976" target="_blank">2026-05-12 05:17:26</a></td></tr>
<tr><td><div id="tag31392" onclick="CopyToClipboard('tag31392');return false;" class="tag-decoration">testing</div><div id="tag10585" onclick="CopyToClipboard('tag10585');return false;" class="tag-decoration">testing-da1fb62</div><div id="tag1630" onclick="CopyToClipboard('tag1630');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/da1fb62b1ef083c7ce799c6e06bedb48940c678e" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25714982563" target="_blank">2026-05-12 05:17:31</a></td></tr>
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
