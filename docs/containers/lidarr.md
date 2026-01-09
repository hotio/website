---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag3028" onclick="CopyToClipboard('tag3028');return false;" class="tag-decoration">nightly</div><div id="tag12730" onclick="CopyToClipboard('tag12730');return false;" class="tag-decoration">nightly-3.1.2.4902</div><div id="tag6518" onclick="CopyToClipboard('tag6518');return false;" class="tag-decoration">nightly-57c0de8</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/57c0de8ab08c2e22ec1ff7c534e2f4bdf2c346af" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20845009589" target="_blank">2026-01-09 07:49:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30835" onclick="CopyToClipboard('tag30835');return false;" class="tag-decoration">release</div><div id="tag9661" onclick="CopyToClipboard('tag9661');return false;" class="tag-decoration">release-3.1.0.4875</div><div id="tag12836" onclick="CopyToClipboard('tag12836');return false;" class="tag-decoration">release-a2f9a48</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/a2f9a48afeaa8ba2d551bb33527fe0b82dc518d3" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20844952078" target="_blank">2026-01-09 07:46:34</a></td></tr>
<tr><td><div id="tag15541" onclick="CopyToClipboard('tag15541');return false;" class="tag-decoration">testing</div><div id="tag26585" onclick="CopyToClipboard('tag26585');return false;" class="tag-decoration">testing-3.1.2.4902</div><div id="tag2476" onclick="CopyToClipboard('tag2476');return false;" class="tag-decoration">testing-2722124</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/2722124692980ae76d7715c98f30f8667ecf5a02" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20844938322" target="_blank">2026-01-09 07:45:51</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
