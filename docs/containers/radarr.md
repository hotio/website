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
<tr><td><div id="tag21802" onclick="CopyToClipboard('tag21802');return false;" class="tag-decoration">nightly</div><div id="tag14553" onclick="CopyToClipboard('tag14553');return false;" class="tag-decoration">nightly-d1c9b9f</div><div id="tag15178" onclick="CopyToClipboard('tag15178');return false;" class="tag-decoration">nightly-7.0.2.10873</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/d1c9b9fbd542a507028ff018864bd009ae0d2bd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42093790698" target="_blank">2026-11-05 19:25:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28367" onclick="CopyToClipboard('tag28367');return false;" class="tag-decoration">release</div><div id="tag31024" onclick="CopyToClipboard('tag31024');return false;" class="tag-decoration">release-ee539db</div><div id="tag18103" onclick="CopyToClipboard('tag18103');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/ee539dbcbe484d0c795e395d6556a0f23f80fe54" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42093779091" target="_blank">2026-11-05 19:25:38</a></td></tr>
<tr><td><div id="tag7174" onclick="CopyToClipboard('tag7174');return false;" class="tag-decoration">testing</div><div id="tag21807" onclick="CopyToClipboard('tag21807');return false;" class="tag-decoration">testing-a945efd</div><div id="tag30519" onclick="CopyToClipboard('tag30519');return false;" class="tag-decoration">testing-7.0.1.10859</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/a945efdc9bc94158863c0fb1458eb40b9631d0c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42093781524" target="_blank">2026-11-05 19:25:39</a></td></tr>
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
