---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8919" onclick="CopyToClipboard('tag8919');return false;" class="tag-decoration">nightly</div><div id="tag778" onclick="CopyToClipboard('tag778');return false;" class="tag-decoration">nightly-ef98764</div><div id="tag29514" onclick="CopyToClipboard('tag29514');return false;" class="tag-decoration">nightly-6.1.2.10359</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/ef98764b8e6fa060930fccd19e46b8672f70b830" target="_blank">Version update: 6.1.1.10317 => 6.1.2.10359</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/23564034436" target="_blank">2026-03-25 21:03:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5341" onclick="CopyToClipboard('tag5341');return false;" class="tag-decoration">release</div><div id="tag22818" onclick="CopyToClipboard('tag22818');return false;" class="tag-decoration">release-211a269</div><div id="tag23689" onclick="CopyToClipboard('tag23689');return false;" class="tag-decoration">release-6.0.4.10291</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/211a26908b83d8f9a3b36c3039db0d169fc69172" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/22292134158" target="_blank">2026-02-23 03:44:09</a></td></tr>
<tr><td><div id="tag15906" onclick="CopyToClipboard('tag15906');return false;" class="tag-decoration">testing</div><div id="tag23238" onclick="CopyToClipboard('tag23238');return false;" class="tag-decoration">testing-54aa31a</div><div id="tag30908" onclick="CopyToClipboard('tag30908');return false;" class="tag-decoration">testing-6.1.2.10359</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/54aa31a3b98c33b0d0533a66c2a6fb4c0e08f904" target="_blank">Version update: 6.1.1.10317 => 6.1.2.10359</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/23593274772" target="_blank">2026-03-26 12:03:15</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
