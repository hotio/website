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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12209" onclick="CopyToClipboard('tag12209');return false;" class="tag-decoration">v2</div><div id="tag29578" onclick="CopyToClipboard('tag29578');return false;" class="tag-decoration">v2-1879296</div><div id="tag25441" onclick="CopyToClipboard('tag25441');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7746" onclick="CopyToClipboard('tag7746');return false;" class="tag-decoration">v2-v2</div><div id="tag2129" onclick="CopyToClipboard('tag2129');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15838" onclick="CopyToClipboard('tag15838');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1879296a9fd1e316d9a9416686ce4398b7bff5a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580645170" target="_blank">2026-09-02 01:45:31</a></td></tr>
<tr><td><div id="tag2096" onclick="CopyToClipboard('tag2096');return false;" class="tag-decoration">v2-develop</div><div id="tag23145" onclick="CopyToClipboard('tag23145');return false;" class="tag-decoration">v2-develop-da3011e</div><div id="tag13814" onclick="CopyToClipboard('tag13814');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag11769" onclick="CopyToClipboard('tag11769');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3142" onclick="CopyToClipboard('tag3142');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4635" onclick="CopyToClipboard('tag4635');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da3011ed3db2e76cd306fe92b87d9441c1cac17a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524763878" target="_blank">2026-09-01 15:16:50</a></td></tr>
<tr><td><div id="tag32216" onclick="CopyToClipboard('tag32216');return false;" class="tag-decoration">v3</div><div id="tag2626" onclick="CopyToClipboard('tag2626');return false;" class="tag-decoration">v3-71a470b</div><div id="tag23957" onclick="CopyToClipboard('tag23957');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag15791" onclick="CopyToClipboard('tag15791');return false;" class="tag-decoration">v3-v3</div><div id="tag26602" onclick="CopyToClipboard('tag26602');return false;" class="tag-decoration">v3-v3.4</div><div id="tag5954" onclick="CopyToClipboard('tag5954');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/71a470b9c1ab9c1ffd77fb178503b4332b502d9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524756120" target="_blank">2026-09-01 15:16:45</a></td></tr>
<tr><td><div id="tag28386" onclick="CopyToClipboard('tag28386');return false;" class="tag-decoration">v3-develop</div><div id="tag17525" onclick="CopyToClipboard('tag17525');return false;" class="tag-decoration">v3-develop-fbf4177</div><div id="tag18536" onclick="CopyToClipboard('tag18536');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1449</div><div id="tag5113" onclick="CopyToClipboard('tag5113');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26362" onclick="CopyToClipboard('tag26362');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag23892" onclick="CopyToClipboard('tag23892');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fbf41775a5457cc7e3d8afe02fce49c444cbf78e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33571922288" target="_blank">2026-09-01 23:38:24</a></td></tr>
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
