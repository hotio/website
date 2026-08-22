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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1858" onclick="CopyToClipboard('tag1858');return false;" class="tag-decoration">release</div><div id="tag7807" onclick="CopyToClipboard('tag7807');return false;" class="tag-decoration">release-1fe2f54</div><div id="tag31120" onclick="CopyToClipboard('tag31120');return false;" class="tag-decoration">release-0.24.2440</div><div id="tag22073" onclick="CopyToClipboard('tag22073');return false;" class="tag-decoration">release-v0</div><div id="tag6622" onclick="CopyToClipboard('tag6622');return false;" class="tag-decoration">release-v0.24</div><div id="tag7292" onclick="CopyToClipboard('tag7292');return false;" class="tag-decoration">release-v0.24.2440</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1fe2f54df611935e52a1ab7c5e061472c41ddcfb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32556892952" target="_blank">2026-08-22 06:24:33</a></td></tr>
<tr><td><div id="tag7248" onclick="CopyToClipboard('tag7248');return false;" class="tag-decoration">testing</div><div id="tag32669" onclick="CopyToClipboard('tag32669');return false;" class="tag-decoration">testing-34f2c56</div><div id="tag14886" onclick="CopyToClipboard('tag14886');return false;" class="tag-decoration">testing-0.24.2434</div><div id="tag11052" onclick="CopyToClipboard('tag11052');return false;" class="tag-decoration">testing-v0</div><div id="tag17301" onclick="CopyToClipboard('tag17301');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25570" onclick="CopyToClipboard('tag25570');return false;" class="tag-decoration">testing-v0.24.2434</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/34f2c562e725a51735b74e75851b64bb1e912f2e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32454758028" target="_blank">2026-08-21 06:31:45</a></td></tr>
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
