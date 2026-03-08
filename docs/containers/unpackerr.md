---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30966" onclick="CopyToClipboard('tag30966');return false;" class="tag-decoration">nightly</div><div id="tag28244" onclick="CopyToClipboard('tag28244');return false;" class="tag-decoration">nightly-3af9307</div><div id="tag24723" onclick="CopyToClipboard('tag24723');return false;" class="tag-decoration">nightly-6f13ffaefc3420353199f0c595c05fbdaab1b78a</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/3af9307fc31f2ac199b470d8e0dd27e1c54e5a86" target="_blank">Version update: df159ba1822d561c48475b62e342fcd74f191bcc => 6f13ffaefc3420353199f0c595c05fbdaab1b78a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22829296687" target="_blank">2026-03-08 20:33:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3539" onclick="CopyToClipboard('tag3539');return false;" class="tag-decoration">release</div><div id="tag28196" onclick="CopyToClipboard('tag28196');return false;" class="tag-decoration">release-d92585e</div><div id="tag32111" onclick="CopyToClipboard('tag32111');return false;" class="tag-decoration">release-0.15.2</div><div id="tag6943" onclick="CopyToClipboard('tag6943');return false;" class="tag-decoration">release-v0</div><div id="tag32541" onclick="CopyToClipboard('tag32541');return false;" class="tag-decoration">release-v0.15</div><div id="tag7100" onclick="CopyToClipboard('tag7100');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d92585eeea221d20f390b80ab3df12abd2d297c9" target="_blank">Version update: 0.15.0 => 0.15.2</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22829297109" target="_blank">2026-03-08 20:33:31</a></td></tr>
<tr><td><div id="tag30105" onclick="CopyToClipboard('tag30105');return false;" class="tag-decoration">testing</div><div id="tag5597" onclick="CopyToClipboard('tag5597');return false;" class="tag-decoration">testing-5845218</div><div id="tag6049" onclick="CopyToClipboard('tag6049');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag23730" onclick="CopyToClipboard('tag23730');return false;" class="tag-decoration">testing-v0</div><div id="tag14811" onclick="CopyToClipboard('tag14811');return false;" class="tag-decoration">testing-v0.15</div><div id="tag19454" onclick="CopyToClipboard('tag19454');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/5845218ff998138f18abf6857a6b8952b1a41b81" target="_blank">Version update: 0.15.0 => 0.15.2</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22829298045" target="_blank">2026-03-08 20:33:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
