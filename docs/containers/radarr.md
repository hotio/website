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
<tr><td><div id="tag6849" onclick="CopyToClipboard('tag6849');return false;" class="tag-decoration">nightly</div><div id="tag1972" onclick="CopyToClipboard('tag1972');return false;" class="tag-decoration">nightly-4cb2767</div><div id="tag23551" onclick="CopyToClipboard('tag23551');return false;" class="tag-decoration">nightly-7.0.0.10779</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/4cb276702ef9af7bacb5276f98afbbfeed8ca33a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39135183273" target="_blank">2026-10-18 14:15:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22684" onclick="CopyToClipboard('tag22684');return false;" class="tag-decoration">release</div><div id="tag26008" onclick="CopyToClipboard('tag26008');return false;" class="tag-decoration">release-ea71de5</div><div id="tag6286" onclick="CopyToClipboard('tag6286');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/ea71de596fb31b0de5a252cceeec2ba627fdeba7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39135180996" target="_blank">2026-10-18 14:15:28</a></td></tr>
<tr><td><div id="tag23581" onclick="CopyToClipboard('tag23581');return false;" class="tag-decoration">testing</div><div id="tag29815" onclick="CopyToClipboard('tag29815');return false;" class="tag-decoration">testing-baad814</div><div id="tag29266" onclick="CopyToClipboard('tag29266');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/baad81435066ed301e252a36c96bfaeeb140e7a5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39135188949" target="_blank">2026-10-18 14:15:35</a></td></tr>
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
