---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag16656" onclick="CopyToClipboard('tag16656');return false;" class="tag-decoration">nightly</div><div id="tag3217" onclick="CopyToClipboard('tag3217');return false;" class="tag-decoration">nightly-607f2f7</div><div id="tag10349" onclick="CopyToClipboard('tag10349');return false;" class="tag-decoration">nightly-2.3.4.5308</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/607f2f72be3d9e97a1c81168e84b9b981f21b315" target="_blank">Version update: 2.3.4.5307 => 2.3.4.5308</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23214745019" target="_blank">2026-03-17 20:23:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10026" onclick="CopyToClipboard('tag10026');return false;" class="tag-decoration">release</div><div id="tag12532" onclick="CopyToClipboard('tag12532');return false;" class="tag-decoration">release-fa01a1c</div><div id="tag8886" onclick="CopyToClipboard('tag8886');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/fa01a1cc953b314843fcfc28ba575f60be93ebad" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/22292129463" target="_blank">2026-02-23 03:43:53</a></td></tr>
<tr><td><div id="tag30182" onclick="CopyToClipboard('tag30182');return false;" class="tag-decoration">testing</div><div id="tag29248" onclick="CopyToClipboard('tag29248');return false;" class="tag-decoration">testing-930acb0</div><div id="tag26823" onclick="CopyToClipboard('tag26823');return false;" class="tag-decoration">testing-2.3.4.5307</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/930acb075125bea28117e3b2e3618da3219357bd" target="_blank">Version update: 2.3.3.5296 => 2.3.4.5307</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23111836145" target="_blank">2026-03-15 13:57:58</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
