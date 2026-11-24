---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag6315" onclick="CopyToClipboard('tag6315');return false;" class="tag-decoration">nightly</div><div id="tag25077" onclick="CopyToClipboard('tag25077');return false;" class="tag-decoration">nightly-c609f72</div><div id="tag26885" onclick="CopyToClipboard('tag26885');return false;" class="tag-decoration">nightly-4d9d9953d4315b27e61d083909de36888e8fc8db</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/c609f7235fa8f7b817ee8ccfa429517911cc2f6d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45426486752" target="_blank">2026-11-24 15:31:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag163" onclick="CopyToClipboard('tag163');return false;" class="tag-decoration">release</div><div id="tag18799" onclick="CopyToClipboard('tag18799');return false;" class="tag-decoration">release-0f6cdf6</div><div id="tag23058" onclick="CopyToClipboard('tag23058');return false;" class="tag-decoration">release-5.1.3</div><div id="tag11382" onclick="CopyToClipboard('tag11382');return false;" class="tag-decoration">release-v5</div><div id="tag28666" onclick="CopyToClipboard('tag28666');return false;" class="tag-decoration">release-v5.1</div><div id="tag8978" onclick="CopyToClipboard('tag8978');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/0f6cdf6d6d0a668d6874e252f6984d9771ef4f07" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45426488147" target="_blank">2026-11-24 15:31:22</a></td></tr>
<tr><td><div id="tag21137" onclick="CopyToClipboard('tag21137');return false;" class="tag-decoration">testing</div><div id="tag6901" onclick="CopyToClipboard('tag6901');return false;" class="tag-decoration">testing-3cc5c83</div><div id="tag14160" onclick="CopyToClipboard('tag14160');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3cc5c837c3beca265a690d1b190926fd539955ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45327597288" target="_blank">2026-11-24 04:36:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
