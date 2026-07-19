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
<tr><td><div id="tag13330" onclick="CopyToClipboard('tag13330');return false;" class="tag-decoration">nightly</div><div id="tag3533" onclick="CopyToClipboard('tag3533');return false;" class="tag-decoration">nightly-6c91ee0</div><div id="tag4904" onclick="CopyToClipboard('tag4904');return false;" class="tag-decoration">nightly-6.4.0.10523</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/6c91ee091c8f7c8525bbc4c318fa9faef8fa75ef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29662195535" target="_blank">2026-07-18 21:45:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14398" onclick="CopyToClipboard('tag14398');return false;" class="tag-decoration">release</div><div id="tag25285" onclick="CopyToClipboard('tag25285');return false;" class="tag-decoration">release-6171903</div><div id="tag5324" onclick="CopyToClipboard('tag5324');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/61719030848aa8c34b1332e7834d22bde227aa61" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29681328937" target="_blank">2026-07-19 09:17:59</a></td></tr>
<tr><td><div id="tag16855" onclick="CopyToClipboard('tag16855');return false;" class="tag-decoration">testing</div><div id="tag25015" onclick="CopyToClipboard('tag25015');return false;" class="tag-decoration">testing-c4cc977</div><div id="tag23462" onclick="CopyToClipboard('tag23462');return false;" class="tag-decoration">testing-6.3.0.10514</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/c4cc977ef36a0824a1bce1303bb5187734c62546" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29360981486" target="_blank">2026-07-14 19:13:05</a></td></tr>
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
