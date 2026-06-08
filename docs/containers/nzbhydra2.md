---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25620" onclick="CopyToClipboard('tag25620');return false;" class="tag-decoration">release</div><div id="tag5742" onclick="CopyToClipboard('tag5742');return false;" class="tag-decoration">release-9aeba08</div><div id="tag29279" onclick="CopyToClipboard('tag29279');return false;" class="tag-decoration">release-8.8.3</div><div id="tag1412" onclick="CopyToClipboard('tag1412');return false;" class="tag-decoration">release-v8</div><div id="tag12256" onclick="CopyToClipboard('tag12256');return false;" class="tag-decoration">release-v8.8</div><div id="tag29854" onclick="CopyToClipboard('tag29854');return false;" class="tag-decoration">release-v8.8.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/9aeba08e2ce694815ced19a1284adf0d866d9f34" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27156431084" target="_blank">2026-06-08 17:51:12</a></td></tr>
<tr><td><div id="tag20435" onclick="CopyToClipboard('tag20435');return false;" class="tag-decoration">testing</div><div id="tag22823" onclick="CopyToClipboard('tag22823');return false;" class="tag-decoration">testing-1883d45</div><div id="tag2491" onclick="CopyToClipboard('tag2491');return false;" class="tag-decoration">testing-8.8.3</div><div id="tag25307" onclick="CopyToClipboard('tag25307');return false;" class="tag-decoration">testing-v8</div><div id="tag13055" onclick="CopyToClipboard('tag13055');return false;" class="tag-decoration">testing-v8.8</div><div id="tag21103" onclick="CopyToClipboard('tag21103');return false;" class="tag-decoration">testing-v8.8.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/1883d4587cf8f43f06078ecc868f49622da4beb3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27156429666" target="_blank">2026-06-08 17:51:11</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
