---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2593" onclick="CopyToClipboard('tag2593');return false;" class="tag-decoration">v2</div><div id="tag1892" onclick="CopyToClipboard('tag1892');return false;" class="tag-decoration">v2-7d444e2</div><div id="tag16918" onclick="CopyToClipboard('tag16918');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag26501" onclick="CopyToClipboard('tag26501');return false;" class="tag-decoration">v2-v2</div><div id="tag26520" onclick="CopyToClipboard('tag26520');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17224" onclick="CopyToClipboard('tag17224');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7d444e2f5fae15759c29fcfb99cbebd9bb3f4774" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524767678" target="_blank">2026-09-01 15:16:53</a></td></tr>
<tr><td><div id="tag27113" onclick="CopyToClipboard('tag27113');return false;" class="tag-decoration">v2-develop</div><div id="tag27236" onclick="CopyToClipboard('tag27236');return false;" class="tag-decoration">v2-develop-da3011e</div><div id="tag31729" onclick="CopyToClipboard('tag31729');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag23883" onclick="CopyToClipboard('tag23883');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag16743" onclick="CopyToClipboard('tag16743');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25691" onclick="CopyToClipboard('tag25691');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da3011ed3db2e76cd306fe92b87d9441c1cac17a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524763878" target="_blank">2026-09-01 15:16:50</a></td></tr>
<tr><td><div id="tag18580" onclick="CopyToClipboard('tag18580');return false;" class="tag-decoration">v3</div><div id="tag599" onclick="CopyToClipboard('tag599');return false;" class="tag-decoration">v3-71a470b</div><div id="tag20549" onclick="CopyToClipboard('tag20549');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag20402" onclick="CopyToClipboard('tag20402');return false;" class="tag-decoration">v3-v3</div><div id="tag14179" onclick="CopyToClipboard('tag14179');return false;" class="tag-decoration">v3-v3.4</div><div id="tag29304" onclick="CopyToClipboard('tag29304');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/71a470b9c1ab9c1ffd77fb178503b4332b502d9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524756120" target="_blank">2026-09-01 15:16:45</a></td></tr>
<tr><td><div id="tag24791" onclick="CopyToClipboard('tag24791');return false;" class="tag-decoration">v3-develop</div><div id="tag8710" onclick="CopyToClipboard('tag8710');return false;" class="tag-decoration">v3-develop-fbf4177</div><div id="tag24178" onclick="CopyToClipboard('tag24178');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1449</div><div id="tag755" onclick="CopyToClipboard('tag755');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6805" onclick="CopyToClipboard('tag6805');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag26524" onclick="CopyToClipboard('tag26524');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fbf41775a5457cc7e3d8afe02fce49c444cbf78e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33571922288" target="_blank">2026-09-01 23:38:24</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
