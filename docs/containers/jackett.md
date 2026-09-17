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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12298" onclick="CopyToClipboard('tag12298');return false;" class="tag-decoration">release</div><div id="tag11371" onclick="CopyToClipboard('tag11371');return false;" class="tag-decoration">release-1f0da49</div><div id="tag29251" onclick="CopyToClipboard('tag29251');return false;" class="tag-decoration">release-0.24.2605</div><div id="tag5265" onclick="CopyToClipboard('tag5265');return false;" class="tag-decoration">release-v0</div><div id="tag17205" onclick="CopyToClipboard('tag17205');return false;" class="tag-decoration">release-v0.24</div><div id="tag17909" onclick="CopyToClipboard('tag17909');return false;" class="tag-decoration">release-v0.24.2605</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1f0da4966f70c2c962f724a80f8a49e3d9f3df2e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35230573445" target="_blank">2026-09-17 13:59:04</a></td></tr>
<tr><td><div id="tag9714" onclick="CopyToClipboard('tag9714');return false;" class="tag-decoration">testing</div><div id="tag7029" onclick="CopyToClipboard('tag7029');return false;" class="tag-decoration">testing-346938c</div><div id="tag26152" onclick="CopyToClipboard('tag26152');return false;" class="tag-decoration">testing-0.24.2605</div><div id="tag9829" onclick="CopyToClipboard('tag9829');return false;" class="tag-decoration">testing-v0</div><div id="tag52" onclick="CopyToClipboard('tag52');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14948" onclick="CopyToClipboard('tag14948');return false;" class="tag-decoration">testing-v0.24.2605</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/346938c1f0d2cfb4fc4048aea9e5e001f5507d99" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35256005862" target="_blank">2026-09-17 17:58:45</a></td></tr>
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
