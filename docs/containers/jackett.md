---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3229" onclick="CopyToClipboard('tag3229');return false;" class="tag-decoration">release</div><div id="tag22219" onclick="CopyToClipboard('tag22219');return false;" class="tag-decoration">release-ec3081c</div><div id="tag8675" onclick="CopyToClipboard('tag8675');return false;" class="tag-decoration">release-0.24.1841</div><div id="tag16930" onclick="CopyToClipboard('tag16930');return false;" class="tag-decoration">release-v0</div><div id="tag11208" onclick="CopyToClipboard('tag11208');return false;" class="tag-decoration">release-v0.24</div><div id="tag8151" onclick="CopyToClipboard('tag8151');return false;" class="tag-decoration">release-v0.24.1841</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ec3081c5ba5eeb2555ea5c2831759cd68d0fa66a" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25664454950" target="_blank">2026-05-11 10:23:25</a></td></tr>
<tr><td><div id="tag26671" onclick="CopyToClipboard('tag26671');return false;" class="tag-decoration">testing</div><div id="tag4546" onclick="CopyToClipboard('tag4546');return false;" class="tag-decoration">testing-148eab0</div><div id="tag6957" onclick="CopyToClipboard('tag6957');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag18374" onclick="CopyToClipboard('tag18374');return false;" class="tag-decoration">testing-v0</div><div id="tag12237" onclick="CopyToClipboard('tag12237');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22218" onclick="CopyToClipboard('tag22218');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/148eab03bcf67653268dadcbc3eb4c041d4e2a87" target="_blank">Version update: 0.24.1831 => 0.24.1841</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25659960708" target="_blank">2026-05-11 08:47:43</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
