---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8924" onclick="CopyToClipboard('tag8924');return false;" class="tag-decoration">release</div><div id="tag21576" onclick="CopyToClipboard('tag21576');return false;" class="tag-decoration">release-4c1046a</div><div id="tag29459" onclick="CopyToClipboard('tag29459');return false;" class="tag-decoration">release-8.5.3</div><div id="tag27419" onclick="CopyToClipboard('tag27419');return false;" class="tag-decoration">release-v8</div><div id="tag22500" onclick="CopyToClipboard('tag22500');return false;" class="tag-decoration">release-v8.5</div><div id="tag29754" onclick="CopyToClipboard('tag29754');return false;" class="tag-decoration">release-v8.5.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4c1046ab893170ff9e210db9fbf03aa5e8e66741" target="_blank">Version update: 8.5.2 => 8.5.3</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23554902566" target="_blank">2026-03-25 17:30:14</a></td></tr>
<tr><td><div id="tag17371" onclick="CopyToClipboard('tag17371');return false;" class="tag-decoration">testing</div><div id="tag11070" onclick="CopyToClipboard('tag11070');return false;" class="tag-decoration">testing-83bd6ff</div><div id="tag25157" onclick="CopyToClipboard('tag25157');return false;" class="tag-decoration">testing-8.5.2</div><div id="tag8156" onclick="CopyToClipboard('tag8156');return false;" class="tag-decoration">testing-v8</div><div id="tag3903" onclick="CopyToClipboard('tag3903');return false;" class="tag-decoration">testing-v8.5</div><div id="tag17084" onclick="CopyToClipboard('tag17084');return false;" class="tag-decoration">testing-v8.5.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/83bd6ff0b869ce35c1e25d79b1a59ae839bdcf12" target="_blank">Upstream update: noblevpn-c3daa84 => noblevpn-3867c07</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23180608353" target="_blank">2026-03-17 05:55:00</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
