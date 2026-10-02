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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26242" onclick="CopyToClipboard('tag26242');return false;" class="tag-decoration">release</div><div id="tag31747" onclick="CopyToClipboard('tag31747');return false;" class="tag-decoration">release-528f69a</div><div id="tag7573" onclick="CopyToClipboard('tag7573');return false;" class="tag-decoration">release-9.1.1</div><div id="tag11997" onclick="CopyToClipboard('tag11997');return false;" class="tag-decoration">release-v9</div><div id="tag6020" onclick="CopyToClipboard('tag6020');return false;" class="tag-decoration">release-v9.1</div><div id="tag27452" onclick="CopyToClipboard('tag27452');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/528f69aba948a1fcda38446cfaf25a27d8fd5254" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36768327106" target="_blank">2026-09-30 19:49:21</a></td></tr>
<tr><td><div id="tag22106" onclick="CopyToClipboard('tag22106');return false;" class="tag-decoration">testing</div><div id="tag21832" onclick="CopyToClipboard('tag21832');return false;" class="tag-decoration">testing-04d3f7a</div><div id="tag27797" onclick="CopyToClipboard('tag27797');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag24340" onclick="CopyToClipboard('tag24340');return false;" class="tag-decoration">testing-v9</div><div id="tag3123" onclick="CopyToClipboard('tag3123');return false;" class="tag-decoration">testing-v9.1</div><div id="tag31053" onclick="CopyToClipboard('tag31053');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/04d3f7ab572769d7aa45c7727acf1c047166938a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36989262391" target="_blank">2026-10-02 09:20:57</a></td></tr>
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
