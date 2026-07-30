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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13883" onclick="CopyToClipboard('tag13883');return false;" class="tag-decoration">release</div><div id="tag10048" onclick="CopyToClipboard('tag10048');return false;" class="tag-decoration">release-04a9a6a</div><div id="tag12115" onclick="CopyToClipboard('tag12115');return false;" class="tag-decoration">release-0.24.2297</div><div id="tag19024" onclick="CopyToClipboard('tag19024');return false;" class="tag-decoration">release-v0</div><div id="tag16512" onclick="CopyToClipboard('tag16512');return false;" class="tag-decoration">release-v0.24</div><div id="tag10016" onclick="CopyToClipboard('tag10016');return false;" class="tag-decoration">release-v0.24.2297</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/04a9a6ad9be3a16e60a3aeab447d84972f36c864" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30523126841" target="_blank">2026-07-30 07:29:21</a></td></tr>
<tr><td><div id="tag9332" onclick="CopyToClipboard('tag9332');return false;" class="tag-decoration">testing</div><div id="tag500" onclick="CopyToClipboard('tag500');return false;" class="tag-decoration">testing-909c201</div><div id="tag27202" onclick="CopyToClipboard('tag27202');return false;" class="tag-decoration">testing-0.24.2297</div><div id="tag7209" onclick="CopyToClipboard('tag7209');return false;" class="tag-decoration">testing-v0</div><div id="tag24853" onclick="CopyToClipboard('tag24853');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5723" onclick="CopyToClipboard('tag5723');return false;" class="tag-decoration">testing-v0.24.2297</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/909c2012aa400843bf9804e6f89583892374b287" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30523128854" target="_blank">2026-07-30 07:29:23</a></td></tr>
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
