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
<tr><td><div id="tag12085" onclick="CopyToClipboard('tag12085');return false;" class="tag-decoration">nightly</div><div id="tag28634" onclick="CopyToClipboard('tag28634');return false;" class="tag-decoration">nightly-ac2854a</div><div id="tag25671" onclick="CopyToClipboard('tag25671');return false;" class="tag-decoration">nightly-727f5aeb194b45b663f1d99a2233e9857a2a8913</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ac2854a1fea2bd54f0ee3a6b5b7cfba60b05461a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35317696736" target="_blank">2026-09-18 07:04:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7326" onclick="CopyToClipboard('tag7326');return false;" class="tag-decoration">release</div><div id="tag17213" onclick="CopyToClipboard('tag17213');return false;" class="tag-decoration">release-f5f5b69</div><div id="tag13973" onclick="CopyToClipboard('tag13973');return false;" class="tag-decoration">release-5.1.3</div><div id="tag6066" onclick="CopyToClipboard('tag6066');return false;" class="tag-decoration">release-v5</div><div id="tag13845" onclick="CopyToClipboard('tag13845');return false;" class="tag-decoration">release-v5.1</div><div id="tag28753" onclick="CopyToClipboard('tag28753');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f5f5b691da6a0b48830ff7885f92b65f35ea3e2c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35371455032" target="_blank">2026-09-18 16:56:54</a></td></tr>
<tr><td><div id="tag18533" onclick="CopyToClipboard('tag18533');return false;" class="tag-decoration">testing</div><div id="tag6585" onclick="CopyToClipboard('tag6585');return false;" class="tag-decoration">testing-e5e9d54</div><div id="tag7" onclick="CopyToClipboard('tag7');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag14041" onclick="CopyToClipboard('tag14041');return false;" class="tag-decoration">testing-v5</div><div id="tag14827" onclick="CopyToClipboard('tag14827');return false;" class="tag-decoration">testing-v5.1</div><div id="tag18135" onclick="CopyToClipboard('tag18135');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e5e9d545af60820a13eb50948a7751082aeadef9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35317685416" target="_blank">2026-09-18 07:04:03</a></td></tr>
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
