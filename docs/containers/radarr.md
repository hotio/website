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
<tr><td><div id="tag30961" onclick="CopyToClipboard('tag30961');return false;" class="tag-decoration">nightly</div><div id="tag15449" onclick="CopyToClipboard('tag15449');return false;" class="tag-decoration">nightly-5af5f8c</div><div id="tag14294" onclick="CopyToClipboard('tag14294');return false;" class="tag-decoration">nightly-6.3.0.10498</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/5af5f8c5de64a5c2fdae5b7be86d2439ef14751a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28589106925" target="_blank">2026-07-02 12:13:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9363" onclick="CopyToClipboard('tag9363');return false;" class="tag-decoration">release</div><div id="tag21613" onclick="CopyToClipboard('tag21613');return false;" class="tag-decoration">release-7e3ba96</div><div id="tag31111" onclick="CopyToClipboard('tag31111');return false;" class="tag-decoration">release-6.2.1.10461</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/7e3ba961713cd269893f839c3d9e50f5f35f6089" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28441681971" target="_blank">2026-06-30 11:42:36</a></td></tr>
<tr><td><div id="tag17537" onclick="CopyToClipboard('tag17537');return false;" class="tag-decoration">testing</div><div id="tag4768" onclick="CopyToClipboard('tag4768');return false;" class="tag-decoration">testing-e1f480d</div><div id="tag26196" onclick="CopyToClipboard('tag26196');return false;" class="tag-decoration">testing-6.2.1.10461</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/e1f480d6b7eee3cedbef1c30bc7e2b165d73eb99" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28589109388" target="_blank">2026-07-02 12:13:25</a></td></tr>
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
